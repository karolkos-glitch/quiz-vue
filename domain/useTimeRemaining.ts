export const useTimeRemaining = (
  initialTimeRemainingValue: number,
  onTimeEnd: () => void
) => {
  const timeRemaining = ref(initialTimeRemainingValue);
  const resetTimeRemaining = () =>
    (timeRemaining.value = initialTimeRemainingValue);

  onMounted(() => {
    const interval = setInterval(() => {
      timeRemaining.value -= 1;
    }, 1000);
    return () => clearInterval(interval);
  });

  watch(timeRemaining, () => {
    if (timeRemaining.value < 0) {
      onTimeEnd();
      resetTimeRemaining();
    }
  });

  return { timeRemaining, resetTimeRemaining };
};
