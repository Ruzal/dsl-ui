<template>
  <svg class="ui-loading" width="20px" height="20px">
    <circle
      stroke="currentColor"
      stroke-width="3"
      stroke-linecap="round"
      fill="none"
      r="8.5"
      cx="10"
      cy="10"
      pathLength="100"
    ></circle>
  </svg>
</template>

<style lang="scss">
.ui-loading {
  animation: ui-loading-svg 1.4s ease-in-out infinite;

  circle {
    stroke-dasharray: 100;
    transform-origin: center;
    animation: ui-loading-circle 1.4s ease-in-out infinite;
  }
}

@keyframes ui-loading-svg {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}

@keyframes ui-loading-circle {
  0%,
  25% {
    stroke-dashoffset: 96;
    transform: rotate(0);
  }
  50%,
  75% {
    stroke-dashoffset: 26;
    transform: rotate(45deg);
  }
  100% {
    stroke-dashoffset: 96;
    transform: rotate(360deg);
  }
}
</style>
