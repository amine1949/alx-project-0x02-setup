import React from 'react';
import { type UserProps } from '../../interfaces';

const UserCard: React.FC<UserProps> = ({
                                           name,
                                           email,
                                           address,
                                           phone,
                                           website,
                                       }) => {
    return (
        <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-200">
            <h3 className="text-xl font-semibold mb-2 text-gray-800">{name}</h3>
            <div className="space-y-2 text-gray-600">
                <p className="flex items-center">
                    <span className="mr-2">📧</span>
                    <a href={`mailto:${email}`} className="hover:underline">
                        {email}
                    </a>
                </p>
                <p className="flex items-center">
                    <span className="mr-2">🏠</span>
                    {`${address.street}, ${address.suite}, ${address.city} ${address.zipcode}`}
                </p>
                <p className="flex items-center">
                    <span className="mr-2">📞</span>
                    <a href={`tel:${phone}`} className="hover:underline">
                        {phone}
                    </a>
                </p>
                <p className="flex items-center">
                    <span className="mr-2">🌐</span>
                    <a
                        href={`https://${website}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline"
                    >
                        {website}
                    </a>
                </p>
            </div>
        </div>
    );
};

export default UserCard;