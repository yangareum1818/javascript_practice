const Title = () => {
  const [money, bankDispatch] = useReducer(bankReducer, 0);

  return (
    <>
      <p>잔고 : {money} 원</p>
    </>
  );
};
