export const getDynamic = req => {
  let dynamicData = "I'm Dynamic";
  return {
    code: 200,
    data: dynamicData,
    msg: ""
  };
};
