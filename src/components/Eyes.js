export const Eyes = ({ eyeOffsetX, eyeOffsetY, eyeRedious }) => (
  <>
    <circle cx={-eyeOffsetX} cy={-eyeOffsetY} r={eyeRedious} />
    <circle cx={eyeOffsetX} cy={-eyeOffsetY} r={eyeRedious} />
  </>
);
