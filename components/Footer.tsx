export default function Footer() {
  return (
    <footer>
      <span>Yuds</span>
      <span>darcy.u83@gmail.com</span>
      <style jsx>{`
        footer {
          width: 100%;
          background-color: rgba(97, 111, 172, 0.6);
          padding: 10px;
          display: flex;
          justify-content: space-evenly;
          align-items: center;
        }
        span {
          font-size: inherit;
        }
      `}</style>
    </footer>
  );
}
