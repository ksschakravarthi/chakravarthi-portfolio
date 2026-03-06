import { useEffect, useState } from 'react';

export default function Cursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [follower, setFollower] = useState({ x: 0, y: 0 });
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    const move = (e) => setPos({ x: e.clientX, y: e.clientY });
    let raf;
    const follow = (e) => {
      raf = requestAnimationFrame(() =>
        setFollower({ x: e.clientX, y: e.clientY })
      );
    };
    const down = () => setClicked(true);
    const up = () => setClicked(false);

    window.addEventListener('mousemove', move);
    window.addEventListener('mousemove', follow);
    window.addEventListener('mousedown', down);
    window.addEventListener('mouseup', up);
    return () => {
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mousemove', follow);
      window.removeEventListener('mousedown', down);
      window.removeEventListener('mouseup', up);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <div
        className="cursor"
        style={{
          left: pos.x - 6,
          top: pos.y - 6,
          transform: clicked ? 'scale(2)' : 'scale(1)',
        }}
      />
      <div
        className="cursor-follower"
        style={{
          left: follower.x - 20,
          top: follower.y - 20,
          transform: clicked ? 'scale(0.5)' : 'scale(1)',
        }}
      />
    </>
  );
}
