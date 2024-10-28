export const takeLeadString = (ls: string) => (s: string) => {
  if (s.startsWith(ls)) {
    return s.substring(ls.length);
  }

  throw new Error(
    `string does not start with lead string.\nString: ${s}\nLead String: ${ls}`
  );
};

export const takePipe = takeLeadString("|");
export const takeNewline = takeLeadString("\n");
