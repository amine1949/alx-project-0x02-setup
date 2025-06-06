import {CardProps} from "@/interfaces";


const Card: React.FC<CardProps> = ({title, content, className = ''}) => {
    return (
        <div className={`bg-white rounded-lg shadow-md p-6 ${className}`}>
            <h3 className="text-xl font-semibold mb-3 text-gray-800">{title}</h3>
            <p className="text-gray-600">{content}</p>
        </div>
    )
}

export default Card;