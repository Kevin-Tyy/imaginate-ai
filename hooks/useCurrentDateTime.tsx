const useCurrentDateTime = () => {
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  const currentDateTime = new Date();
  const day = days[currentDateTime.getDay()];
  const month = months[currentDateTime.getMonth()];
  const date = currentDateTime.getDate();
  let hour = currentDateTime.getHours();
  const minute = currentDateTime.getMinutes();
  const ampm = hour >= 12 ? "PM" : "AM";
  hour = hour % 12;
  hour = hour === 0 ? 12 : hour;
  const formattedTime = `${hour}:${minute < 10 ? "0" + minute : minute}${ampm}`;

  return `<span style="color: #343434">${day}</span>, <span style="color : #5A34FF">${month} ${
    date < 10 ? "0" + date : date
  }th <span style="color: #343434">.</span> ${formattedTime}</span>`;
};

export default useCurrentDateTime;
