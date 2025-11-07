import React from 'react';
import Badge from './common/Badge';

const SkillCard = ({ category, icon, items }) => {
  const levelClass = (level) => {
    switch ((level || '').toLowerCase()) {
      case 'expert':
        return 'bg-green-100 text-green-800 border border-green-200';
      case 'advanced':
        return 'bg-blue-100 text-blue-800 border border-blue-200';
      case 'intermediate':
        return 'bg-yellow-100 text-yellow-800 border border-yellow-200';
      case 'beginner':
        return 'bg-purple-100 text-purple-800 border border-purple-200';
      default:
        return 'bg-gray-100 text-gray-800 border border-gray-200';
    }
  };
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow">
      <div className="flex items-center mb-4">
        <span className="w-8 h-8 mr-3 text-primary-500 dark:text-primary-400" dangerouslySetInnerHTML={{ __html: icon }} />
        <h3 className="text-xl font-bold text-gray-900 dark:text-white">{category}</h3>
      </div>
      <div className="space-y-4">
        {items.map((item, index) => (
          <div key={index} className="border-b border-gray-200 dark:border-gray-700 pb-4 last:border-0 last:pb-0">
            <div className="flex justify-between items-center mb-2">
              <div className="flex items-center gap-2">
                {item.icon && (
                  <span 
                    className="w-5 h-5 text-primary-500 dark:text-primary-400" 
                    dangerouslySetInnerHTML={{ __html: item.icon }} 
                  />
                )}
                <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200">{item.name}</h4>
              </div>
              <Badge
                text={item.level}
                className={levelClass(item.level)}
              />
            </div>
            {item.description && (
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {item.description}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillCard;