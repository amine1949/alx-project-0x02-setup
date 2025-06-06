import {type CardProps } from "@/interfaces/index";


const Card: React.FC<CardProps> = ({title, content}) => {
    return (
        <div className={'bg-white rounded-lg shadow-md p-6'}>
            <h3 className="text-xl font-semibold mb-3 text-gray-800">{title}</h3>
            <p className="text-gray-600">{content}</p>
        </div>
    )
}

export default Card;