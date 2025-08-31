export default function useUniqueAvatar(seed, size = 40) {
  return `https://i.pravatar.cc/${size}?u=${seed}`;
}
