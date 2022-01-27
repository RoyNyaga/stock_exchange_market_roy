import { message } from 'antd';



const Notify = (() => {
  
  const success = (text) => {
    message.success({
      content: text,
      duration: 4,
      style: {
        position: "absolute",
        top: "80vh",
      }
    });
  };

  return { success }
})()

export default Notify