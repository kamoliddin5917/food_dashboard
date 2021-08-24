import "./Bottom.scss";

const Bottom = () => {
  return (
    <div className="bottom">
      <div className="bottom__header">
        <h2 className="bottom__title">Most Ordered</h2>
        <select className="bottom__select">
          <option value="today">today</option>
          <option value="before">before</option>
          <option value="thedaybefore">the day before</option>
        </select>
      </div>

      <div className="bottom__bottom">
        <div className="bottom__circle bottom__circle-1">
          <div className="bottom__circle bottom__circle-2">
            <div className="bottom__circle bottom__circle-3">
              <div className="bottom__circle bottom__circle-4"></div>
            </div>
          </div>
        </div>

        <div className="bottom__status">
          <div className="bottom__status-list">
            <div className="bottom__status-text">
              <div className="bottom__status-text-title">Dine In</div>
              <div className="bottom__status-text-summ">200 customers</div>
            </div>
          </div>
          <div className="bottom__status-list">
            <div className="bottom__status-text">
              <div className="bottom__status-text-title">To Go</div>
              <div className="bottom__status-text-summ">122 customers</div>
            </div>
          </div>
          <div className="bottom__status-list">
            <div className="bottom__status-text">
              <div className="bottom__status-text-title">Delivery</div>
              <div className="bottom__status-text-summ">264 customers</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bottom;
