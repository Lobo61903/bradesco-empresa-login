/**
 * Bot protection — disabled.
 */
export function markPageLoad() {}
export function startInteractionTracking() {}
export function stopInteractionTracking() {}
export function setHoneypotValue(_val: string) {}
export function runClientSideValidation() {
  return { valid: true, fingerprint: {}, checks: {}, botReasons: [] };
}
export function generateChallenge() { return ""; }
export async function solveProofOfWork(_challenge: string, _difficulty: number) {
  return { nonce: 0, hash: "" };
}
