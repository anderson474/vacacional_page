export default function Layout({ children }) {
  return (
    <div className="font-sans bg-white text-gray-800">
      <main>{children}</main>
    </div>
  );
}