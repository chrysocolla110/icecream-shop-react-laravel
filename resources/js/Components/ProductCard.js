import { formatCurrency } from "@/Helpers/helpers";
import { Link } from "@inertiajs/inertia-react";
import React from "react";
import { Heading5 } from "./Elements";

const ProductCard = ({ product }) => {
    return (
        <Link href={route("product", { slug: "ddd" })}>
            <div>
                <div className="relative">
                    <img
                        className="h-full  w-full object-cover lg:w-72"
                        src={"/img/products/img-" + product + ".jpg"}
                        alt="products"
                    />
                    <div className=" absolute inset-0 opacity-0 transition-all duration-500 hover:opacity-100">
                        <div className="absolute inset-0 bg-orange-100 opacity-80 "></div>

                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="flex space-x-3">
                                <div className="flex h-8 w-8 items-center justify-center bg-gray-800 text-white">
                                    f
                                </div>
                                <div className="flex h-8 w-8 items-center justify-center bg-gray-800 text-white">
                                    f
                                </div>
                                <div className="flex h-8 w-8 items-center justify-center bg-gray-800 text-white">
                                    f
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="pt-5 pb-10">
                    <div className=" text-center">
                        <h4 className="title mb-1 text-2xl">CHOCO GLAZE</h4>
                        <p className="mb-2 font-text text-sm">
                            Now with chocolate chips!
                        </p>
                        <Heading5>
                            {formatCurrency(1.67)}
                        </Heading5>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default ProductCard;
