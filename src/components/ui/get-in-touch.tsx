import Button from "./button";

const GetInTouch = () => {
  return (
    <form className="w-full flex flex-col">
      <div>
        <label htmlFor="">name</label>
        <input type="text" />
      </div>

      <div>
        <label htmlFor="">Email</label>
        <input type="text" />
      </div>

      <div>
        <label htmlFor="">Service</label>
        <select name="" id=""></select>
      </div>

      <div>
        <label htmlFor="">Message</label>
        <input type="text" />
      </div>

      <Button>Get In Touch</Button>
    </form>
  );
};

export default GetInTouch;
