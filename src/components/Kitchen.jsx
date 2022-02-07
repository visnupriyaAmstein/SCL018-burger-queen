import OrdersList from "./OrdersList";

const Kitchen = () => {

return (
    <div className="flex flex-col">
    <div className="flex flex-col mt-10 ml-10 mb-5">
        <h2 className="text-white-600">ÓRDENES PENDIENTES</h2>
    </div>
        <OrdersList/>
    </div>
);
};

export default Kitchen;