export const required = (value) => (value ? undefined : "required");

export const maxLength = (maxLength) => (value) =>
  value && value.length > maxLength
    ? `Must be ${maxLength} characters or less`
    : undefined;
