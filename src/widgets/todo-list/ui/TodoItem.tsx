import type { Todo } from '~/entities/todo/model';
import { Button } from '~/shared/ui/button';
import { RiDeleteBinLine, RiEdit2Line } from '@remixicon/react';

import { Item, ItemActions, ItemContent, ItemDescription, ItemTitle } from '~/shared/ui/item';
import { Tooltip, TooltipContent, TooltipTrigger } from '~/shared/ui/tooltip';

const todoActions = [
  { label: 'Редактировать', icon: RiEdit2Line },
  { label: 'Удалить', icon: RiDeleteBinLine },
];

const TodoItem = ({ name, description }: Todo) => {
  return (
    <div className="flex items-center justify-between">
      <Item variant="outline">
        <ItemContent>
          <ItemTitle>{name}</ItemTitle>
          <ItemDescription>{description || 'Описание отсутствует'}</ItemDescription>
        </ItemContent>
        <ItemActions>
          {todoActions.map((action) => (
            <Tooltip>
              <TooltipTrigger
                render={
                  <Button variant="outline">
                    <action.icon />
                  </Button>
                }
              ></TooltipTrigger>
              <TooltipContent>{action.label}</TooltipContent>
            </Tooltip>
          ))}
        </ItemActions>
      </Item>
    </div>
  );
};

export default TodoItem;
