// components/Footer.tsx
const Footer = () => {
  return (
    <footer className="bg-layout flex justify-between text-center h-12 items-center px-4 mt-auto text-white">
      <p>© 2025 My Website</p>
      <div>
        <a href="#" className="mr-4 hover:underline">
          이용 약관
        </a>
        <a href="#" className="hover:underline">
          개인정보 처리방침
        </a>
      </div>
    </footer>
  );
};

export default Footer;
