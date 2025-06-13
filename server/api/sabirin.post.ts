export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig(event);
  const body = await readBody(event);
  const chatID = "-1001598248299";
  const threadID = "1471";

  let loopsResponse;
  try {
    loopsResponse = await fetch("https://app.loops.so/api/v1/contacts/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${config.loopsApiKey}`,
      },
      body: JSON.stringify({
        email: body.email,
        source: "sabirin-list",
        locale: body.locale,
      }),
    });

    if (!loopsResponse.ok) {
      const errorData = await loopsResponse.json().catch(() => ({}));
      throw new Error(
        errorData.message || `Loops API error: ${loopsResponse.statusText}`
      );
    }
  } catch (error) {
    const errorMessage = `
❌ Failed to register in Sabirin list\!
Email: ${body.email}
Error: ${(error instanceof Error ? error.message : "Unknown error").replace(
      /[_*[\]()~`>#+\-=|{}.!]/g,
      "\\$&"
    )}
`;

    const params = new URLSearchParams({
      chat_id: chatID,
      message_thread_id: threadID,
      parse_mode: "HTML",
      text: errorMessage,
    });

    await fetch(
      `https://api.telegram.org/bot${config.telegramBotToken}/sendMessage?${params}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "text/text",
        },
      }
    );

    return {
      success: false,
      message:
        error instanceof Error
          ? error.message
          : "Failed to register in the waiting list",
    };
  }

  const message = `
  <b>🎉 New Sabirin list Registration\!</b>
  `;

  const params = new URLSearchParams({
    chat_id: chatID,
    message_thread_id: threadID,
    parse_mode: "HTML",
    text: message,
  });

  await fetch(
    `https://api.telegram.org/bot${config.telegramBotToken}/sendMessage?${params}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "text/text",
      },
    }
  );

  return {
    success: true,
    message: "Successfully registered in the waiting list",
  };
});
