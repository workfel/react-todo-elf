import React from 'react';
import { VisibilityFilterProps } from '../repository/todo.repository';

const ButtonFilter = ({
                        children,
                        onClick,
                        id
                      }: { children: React.ReactNode, onClick: (id: VisibilityFilterProps['filter']) => any, id: VisibilityFilterProps['filter'] }) => {
  return (
    <div>
      <button
        className="px-6 py-3 rounded-full border-2 border-slate-600 bg-slate-900 hover:bg-slate-800 "
        onClick={() => onClick(id)}>
        {children}
      </button>
    </div>
  );
};

export default ButtonFilter;
