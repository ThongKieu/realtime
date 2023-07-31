/* eslint-disable react/prop-types */
import {
  Card,
  CardBody,
  Typography,
} from "@material-tailwind/react";
// import Spreadsheet from "react-spreadsheet";
const data = [
  [{ value: "Vanilla" }, { value: "Chocolate" }, { value: "Chocolate" }, { value: "Chocolate" }, { value: "Chocolate" }, { value: "Chocolate" },{ value: "Vanilla" }, { value: "Chocolate" }, { value: "Chocolate" }, { value: "Chocolate" }, { value: "Chocolate" }, { value: "Chocolate" }],
  [{ value: "Strawberry" }, { value: "Cookies" }],
  [{ value: "Vanilla" }, { value: "Chocolate" }],[{ value: "Vanilla" }, { value: "Chocolate" }, { value: "Chocolate" }, { value: "Chocolate" }, { value: "Chocolate" }, { value: "Chocolate" },{ value: "Vanilla" }, { value: "Chocolate" }, { value: "Chocolate" }, { value: "Chocolate" }, { value: "Chocolate" }, { value: "Chocolate" }],
  [{ value: "Strawberry" }, { value: "Cookies" }],
  [{ value: "Vanilla" }, { value: "Chocolate" }],[{ value: "Vanilla" }, { value: "Chocolate" }, { value: "Chocolate" }, { value: "Chocolate" }, { value: "Chocolate" }, { value: "Chocolate" },{ value: "Vanilla" }, { value: "Chocolate" }, { value: "Chocolate" }, { value: "Chocolate" }, { value: "Chocolate" }, { value: "Chocolate" }],
  [{ value: "Strawberry" }, { value: "Cookies" }],
  [{ value: "Vanilla" }, { value: "Chocolate" }],[{ value: "Vanilla" }, { value: "Chocolate" }, { value: "Chocolate" }, { value: "Chocolate" }, { value: "Chocolate" }, { value: "Chocolate" },{ value: "Vanilla" }, { value: "Chocolate" }, { value: "Chocolate" }, { value: "Chocolate" }, { value: "Chocolate" }, { value: "Chocolate" }],
  [{ value: "Strawberry" }, { value: "Cookies" }],
  [{ value: "Vanilla" }, { value: "Chocolate" }],
];
function CardMain(props) {
  return (
    <div>
    <div className="flex">
      <Card className="m-1 mt-6 border border-solid w-96">
        <CardBody className="p-3">
          <Typography className="text-center" variant="h5" color="blue-gray">
            {props.title}
          </Typography>
        </CardBody>
      </Card>
      <Card className="m-1 mt-6 border border-blue-600 border-solid shadow-blue-400 w-96">
        <CardBody className="flex justify-between p-3">
          <Typography className="text-center text-blue-600" variant="h5" color="blue-gray">
            Lịch Nhận
          </Typography>
          <Typography className="text-center text-blue-600" variant="paragraph" color="blue-gray">
            {props.countNhan}
          </Typography>
        </CardBody>
      </Card>
      <Card className="m-1 mt-6 border border-solid border-yellow-600-600 shadow-orange-400 w-96">
        <CardBody className="flex justify-between p-3">
          <Typography className="text-center text-orange-600" variant="h5" color="blue-gray">
            Lịch Chưa Phân
          </Typography>
          <Typography className="text-center text-orange-600" variant="paragraph" color="blue-gray">
            {props.countChuaPhan}
          </Typography>
        </CardBody>
      </Card>
      <Card className="m-1 mt-6 border border-green-600 border-solid shadow-green-400 w-96">
        <CardBody className="flex justify-between p-3">
          <Typography className="text-center text-green-600" variant="h5" color="blue-gray">
            Lịch Đã Phân
          </Typography>
          <Typography className="text-center text-green-600" variant="paragraph" color="blue-gray">
            {props.countDaPhan}
          </Typography>
        </CardBody>
      </Card>
      <Card className="m-1 mt-6 border border-red-600 border-solid shadow-red-400 w-96">
        <CardBody className="flex justify-between p-3">
          <Typography className="text-center text-red-600" variant="h5" color="blue-gray">
            Lịch Hủy
          </Typography>
          <Typography className="text-center text-red-600" variant="paragraph" color="blue-gray">
            {props.countHuy}
          </Typography>
        </CardBody>
      </Card>
      </div>
      {/* <div className="grid grid-cols-12 mt-2">
        <div className="col-span-6 mr-1 overflow-scroll">
          <Spreadsheet data={data}></Spreadsheet>
        </div>
        <div className="col-span-6 ml-1 overflow-scroll">
          <Spreadsheet data={data}></Spreadsheet>
        </div>

      </div> */}
    </div>
  )
}

export default CardMain
