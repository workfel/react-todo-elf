import ButtonFilter from './ButtonFilter';
import { VisibilityFilterProps } from '../repository/todo.repository';

const VisibilityFilter = ({ onChange }: { onChange: (filter: VisibilityFilterProps['filter']) => void }) => {
  return (
    <div className="flex gap-x-2 justify-center">
      <ButtonFilter onClick={onChange} id="all">
        All
      </ButtonFilter>
      <ButtonFilter onClick={onChange} id="active">
        Active
      </ButtonFilter>
      <ButtonFilter onClick={onChange} id="completed">
        Completed
      </ButtonFilter>
    </div>
  );
};

export default VisibilityFilter;
