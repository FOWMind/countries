let typingTimeout;
const finishedTypingInterval = 1000; // time in milliseconds

export function useFinishedTyping() {
  // on input, start the countdown
  const onInput = (finishedTyping = () => {}) => {
    clearTimeout(typingTimeout);
    typingTimeout = setTimeout(finishedTyping, finishedTypingInterval);
  };

  return { onInput };
}
