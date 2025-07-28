export const validationName = (value: string): string | null => {
  if ((value.length < 2 || value.length > 7) && value.length !== 0) return 'Enter between 2 and 7 characters';
  if (/^\d+$/.test(value)) return 'The name cannot contain only numbers';
  if (!/^[a-zA-Z0-9]*$/.test(value)) return 'Only latin letters/numbers';
  return null;
};

export const validationPassword = (value: string): string | null => {
  if ((value.length < 5 || value.length > 10) && value.length !== 0) return 'Enter between 5 and 10 characters';
  if (!/^\d*$/.test(value)) return 'Only numbers';
  return null;
};
