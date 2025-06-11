<template>
  <div ref="containerRef" :class="`w-full h-full ${className || ''}`">
    <canvas
      ref="canvasRef"
      class="pointer-events-none"
      :style="{
        width: canvasSize.width + 'px',
        height: canvasSize.height + 'px',
      }"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted, watch } from "vue";
import { useResizeObserver, useIntersectionObserver } from "@vueuse/core";

interface FlickeringGridProps {
  squareSize?: number;
  gridGap?: number;
  flickerChance?: number;
  color?: string;
  width?: number;
  height?: number;
  className?: string;
  maxOpacity?: number;
}

const props = withDefaults(defineProps<FlickeringGridProps>(), {
  squareSize: 12,
  gridGap: 6,
  flickerChance: 0.3,
  color: "rgb(0, 0, 0)",
  maxOpacity: 0.3,
});

const canvasRef = ref<HTMLCanvasElement>();
const containerRef = ref<HTMLDivElement>();
const canvasSize = ref({ width: 0, height: 0 });

let animationFrameId: number;
let gridParams: ReturnType<typeof setupCanvas>;

const memoizedColor = computed(() => {
  const toRGBA = (color: string) => {
    if (typeof window === "undefined") {
      return "rgba(0, 0, 0,";
    }
    const canvas = document.createElement("canvas");
    canvas.width = canvas.height = 1;
    const ctx = canvas.getContext("2d");
    if (!ctx) return "rgba(255, 0, 0,";
    ctx.fillStyle = color;
    ctx.fillRect(0, 0, 1, 1);
    const [r, g, b] = Array.from(ctx.getImageData(0, 0, 1, 1).data);
    return `rgba(${r}, ${g}, ${b},`;
  };
  return toRGBA(props.color);
});

function setupCanvas(canvas: HTMLCanvasElement, width: number, height: number) {
  const dpr = window.devicePixelRatio || 1;
  canvas.width = width * dpr;
  canvas.height = height * dpr;
  canvas.style.width = `${width}px`;
  canvas.style.height = `${height}px`;
  const cols = Math.floor(width / (props.squareSize + props.gridGap));
  const rows = Math.floor(height / (props.squareSize + props.gridGap));

  const squares = new Float32Array(cols * rows);
  for (let i = 0; i < squares.length; i++) {
    squares[i] = Math.random() * props.maxOpacity;
  }

  return { cols, rows, squares, dpr };
}

function updateSquares(squares: Float32Array, deltaTime: number) {
  for (let i = 0; i < squares.length; i++) {
    if (Math.random() < props.flickerChance * deltaTime) {
      squares[i] = Math.random() * props.maxOpacity;
    }
  }
}

function drawGrid(
  ctx: CanvasRenderingContext2D,
  width: number,
  height: number,
  cols: number,
  rows: number,
  squares: Float32Array,
  dpr: number
) {
  ctx.clearRect(0, 0, width, height);
  ctx.fillStyle = "transparent";
  ctx.fillRect(0, 0, width, height);

  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      const opacity = squares[i * rows + j];
      ctx.fillStyle = `${memoizedColor.value}${opacity})`;
      ctx.fillRect(
        i * (props.squareSize + props.gridGap) * dpr,
        j * (props.squareSize + props.gridGap) * dpr,
        props.squareSize * dpr,
        props.squareSize * dpr
      );
    }
  }
}

function updateCanvasSize() {
  if (!containerRef.value) return;

  const newWidth = props.width || containerRef.value.clientWidth;
  const newHeight = props.height || containerRef.value.clientHeight;
  canvasSize.value = { width: newWidth, height: newHeight };

  if (canvasRef.value) {
    gridParams = setupCanvas(canvasRef.value, newWidth, newHeight);
  }
}

let lastTime = 0;
function animate(time: number) {
  if (!isVisible.value || !canvasRef.value) return;

  const deltaTime = (time - lastTime) / 1000;
  lastTime = time;

  const ctx = canvasRef.value.getContext("2d");
  if (!ctx) return;

  updateSquares(gridParams.squares, deltaTime);
  drawGrid(
    ctx,
    canvasRef.value.width,
    canvasRef.value.height,
    gridParams.cols,
    gridParams.rows,
    gridParams.squares,
    gridParams.dpr
  );
  animationFrameId = requestAnimationFrame(animate);
}

// Use VueUse composables for intersection and resize observation
const isVisible = ref(false);

useIntersectionObserver(
  canvasRef,
  ([{ isIntersecting }]) => {
    isVisible.value = isIntersecting;
  },
  {
    threshold: 0,
  }
);

useResizeObserver(containerRef, () => {
  updateCanvasSize();
});

// Watch for visibility changes to start/stop animation
watch(isVisible, (visible) => {
  if (visible && canvasRef.value) {
    animationFrameId = requestAnimationFrame(animate);
  } else {
    cancelAnimationFrame(animationFrameId);
  }
});

onMounted(() => {
  updateCanvasSize();
  if (isVisible.value) {
    animationFrameId = requestAnimationFrame(animate);
  }
});

onUnmounted(() => {
  cancelAnimationFrame(animationFrameId);
});
</script>
