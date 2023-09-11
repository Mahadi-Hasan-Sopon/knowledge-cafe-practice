import PropTypes from "prop-types";

const SpendTime = ({ addSpendTime }) => {
  return (
    <div>
      <h1 className="text-2xl text-[#6047EC] font-bold text-center border px-12 py-5 border-[#6047EC] rounded-lg">
        Spent time on read : {addSpendTime ? addSpendTime : 0} min
      </h1>
    </div>
  );
};

SpendTime.propTypes = {
  addSpendTime: PropTypes.number,
};

export default SpendTime;
