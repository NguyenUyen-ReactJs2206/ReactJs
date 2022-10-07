import React, { useState, useEffect } from 'react'
import Form from 'react-bootstrap/Form'
import styled from 'styled-components'
const Button = styled.button`
  color: yellow;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid yellow;
  border-radius: 3px;
`;
const ErrorText = styled.div`
  color: red;
  text-align: start;
`;

export default function BTVN_Form({ account, typeAccount, banks }) {
  //so tk thu huong
  const [accountNumber, setAccountNumber] = useState('');
  //so tien chuyen
  const [transferAmount, setTransferAmount] = useState('');
  //so tien co the chuyen
  const [totalMoneyCanTransfer, setTotalMoneyCanTransfer] = useState(0);
  //Loai TK 1 or 2
  const [listTypeAccount, setListTypeAccount] = useState(0);
  //textarea
  const [textarea, setTextarea] = useState("")
  
  const [isSubmit, setIsSubmit] = useState(false);
  const submitForm = (e) => {
    e.preventDefault();
    setIsSubmit(true)
    if (setIsSubmit(true)) {
      alert('Submit form success')
    }
  }

  //Error for Money can sent
  const [errorMoneyCanTransfer, setErrorMoneyCanTransfer] = useState(
    {
      isErrorMoneyCanTransfer: false,
      messageErrorMoneyCanTransfer: "",
    }
  );
  
  //Error for textarea
  const [errorTextarea, setErrorTextarea] = useState(
    {
      isErrorTextarea: false,
      messageErrorTextarea: ""
    }
  )
  // textarea = textarea.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
  // textarea = textarea.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
  // textarea = textarea.replace(/ì|í|ị|ỉ|ĩ/g, "i");
  // textarea = textarea.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
  // textarea = textarea.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
  // textarea = textarea.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
  // textarea = textarea.replace(/đ/g, "d");
  // textarea = textarea.replace(/À|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ/g, "A");
  // textarea = textarea.replace(/È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ/g, "E");
  // textarea = textarea.replace(/Ì|Í|Ị|Ỉ|Ĩ/g, "I");
  // textarea = textarea.replace(/Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ/g, "O");
  // textarea = textarea.replace(/Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ/g, "U");
  // textarea = textarea.replace(/Ỳ|Ý|Ỵ|Ỷ|Ỹ/g, "Y");
  // textarea = textarea.replace(/Đ/g, "D");
  // textarea = textarea.replace(/!|@|%|\^|\*|\(|\)|\+|\=|\<|\>|\?|\/|,|\.|\:|\;|\'|\"|\&|\#|\[|\]|~|\$|_|`|-|{|}|\||\\/g, " ");
  // textarea = textarea.replace(/  +/g, ' ');
  useEffect(() => {
    if (!textarea) {
      return setErrorTextarea(
        (pre) =>
        (pre = {
          ...pre,
          isErrorTextarea: true,
          messageErrorTextarea: "Vui lòng nhập dữ liệu"
        })
      )
    }if (textarea.length < 140){
      return  setErrorTextarea(
        (pre) =>
        (pre = {
          ...pre,
          isErrorTextarea: false,
          messageErrorTextarea: " "
        })
      )}  if (textarea.length > 140) {
      return setErrorTextarea(
        (pre) =>
        (pre = {
          ...pre,
          isErrorTextarea: true,
          messageErrorTextarea: "Vui lòngs chỉ nhập tối đa 140 ký tự"
        })
      )
    }
  },[textarea,isSubmit])


  useEffect(() => {
    if (!transferAmount) {
      return setErrorMoneyCanTransfer(
        (pre) =>
        (pre = {
          ...pre,
          isErrorMoneyCanTransfer: true,
          messageErrorMoneyCanTransfer: "Please enter an amount!",
        })
      );
    }
    if (transferAmount < 50000) {
      return setErrorMoneyCanTransfer(
        (pre) =>
        (pre = {
          ...pre,
          isErrorMoneyCanTransfer: true,
          messageErrorMoneyCanTransfer: "You must transfer an amount greater than 50000 VND!"
        })
      );
    } if (totalMoneyCanTransfer == 0) {
      return setErrorMoneyCanTransfer(
        (pre) =>
        (pre = {
          ...pre,
          isErrorMoneyCanTransfer: true,
          messageErrorMoneyCanTransfer: "Please choose account number!",
        })
      );
    }
    if (transferAmount - totalMoneyCanTransfer > 0) {
      return setErrorMoneyCanTransfer(
        (pre) =>
        (pre = {
          ...pre,
          isErrorMoneyCanTransfer: true,
          messageErrorMoneyCanTransfer: "You must transfer an amount less than the amount you can transfer!",
        })
      );
    }

    return setErrorMoneyCanTransfer(
      (pre) =>
      (pre = {
        ...pre,
        isErrorMoneyCanTransfer: false,
        messageErrorMoneyCanTransfer: ""
      })
    )
  }, [transferAmount, totalMoneyCanTransfer, isSubmit])

  //Error 
  return (
    <>
      <h3 style={{ textAlign: "center" }}>FORM</h3>
      <div className='container' style={{ width: "50%" }}>

        <form className="group" onSubmit={(e) => submitForm(e)}>
          <Form.Group className="mb-3">
            <Form.Label>Số Tài Khoản</Form.Label>
            <Form.Select
              onChange={(e) => setTotalMoneyCanTransfer(
                (pre) => (pre = e.target.value))
              }>
              <option>123456 - Tên người dùng</option>
              {account.map((itemAccount) => (
                <option value={itemAccount.totalMoney}>
                  {itemAccount.accountNumber}-{itemAccount.name}
                </option>))}
            </Form.Select>
          </Form.Group>

          <p> Số tiền có thể chuyển: {totalMoneyCanTransfer} VNĐ</p>

          <Form.Group className="mb-3">
            <Form.Label>Loại Tài Khoản</Form.Label>
            <Form.Select
              onChange={(e) => setListTypeAccount((pre) => pre = e.target.value)}>
              <option>Chọn loại tài khoản</option>
              {
                typeAccount.map((itemTypeAccount, index) => (
                  <option value={itemTypeAccount.value} key={index}>
                    {itemTypeAccount.name}
                  </option>
                ))}
            </Form.Select>
            <Form.Control placeholder="Nhập Số Tài Khoản"
              style={{ display: listTypeAccount == 2 ? "block" : "none" }} />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Số Tài Khoản thụ hưởng</Form.Label>
            <Form.Control placeholder="Nhập Số Tài Khoản"
              value={accountNumber}
              onChange={(e) => setAccountNumber(pre => pre = e.target.value)} />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Ngân Hàng Thụ Hưởng</Form.Label>
            <Form.Select>
              <option>Chọn Ngân Hàng</option>
              {banks.map((itemBanks) => (
                <option>{itemBanks.name}</option>
              ))}

            </Form.Select>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Chi Nhánh</Form.Label>
            <Form.Select>
              <option>Chọn Chi Nhánh</option>
              {banks.map((itemBanks) => (
                <option>{itemBanks.branch}</option>
              ))}
            </Form.Select>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Số Tiền Chuyển</Form.Label>
            <Form.Control placeholder=""
              value={transferAmount}
              onChange={(e) => setTransferAmount(pre => pre = e.target.value)} />
            {errorMoneyCanTransfer.isErrorMoneyCanTransfer && isSubmit && (
              <ErrorText className='form-text danger'>
                {errorMoneyCanTransfer.messageErrorMoneyCanTransfer}
              </ErrorText>
            )}
          </Form.Group>

          <p>Phí chuyển tiền: {Math.floor(transferAmount / 50)}VNĐ</p>

          <Form.Group className="mb-3">
            <Form.Control
              as="textarea"
              placeholder="Vui lòng nhập tiếng việt không dấu, tối đa là 140 ký tự!"
              style={{ height: '100px' }}
              onChange={(e) => setTextarea(pre => pre = e.target.value)}
            />
            {errorTextarea.isErrorTextarea && isSubmit && (
              <ErrorText className='form-text danger'>
                {errorTextarea.messageErrorTextarea}
              </ErrorText>)}
          </Form.Group>
          <Button type='submit' className='btn btn-primary'>Submit</Button>
        </form>
      </div>
    </>
  )
}
