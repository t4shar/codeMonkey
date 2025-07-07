
export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="my-3 text-center">
      <p>
        © <span>{currentYear}</span> Developed By{" "}
        <a
          href="https://github.com/t4shar"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline"
        >
          Tushar
        </a>{" "}
        All Rights Reserved
      </p>
    </div>
  );
};
