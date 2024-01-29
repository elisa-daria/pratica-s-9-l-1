const ButtonComponent = (propObj) => {
  const handleClick = () => {
    window.location.href = "https://placebear.com/";
  };

  return (
    <>
      <button className="btn" onClick={handleClick}>
        {propObj.toClick}
      </button>
    </>
  );
};

export default ButtonComponent;
