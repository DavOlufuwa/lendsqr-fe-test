import {render,} from '@testing-library/react';
import {it, expect} from 'vitest';
import Dashboard from '../pages/Dashboard/Dashboard';
import { useAllUsersStore } from '../lib/store/useAllUsers';

beforeEach(() => {
  useAllUsersStore.getState().allUsers
  render(<Dashboard />)
})


it("Should render all the Users", async() => {
 

  const statCards = document.querySelectorAll('.number');

  expect(statCards).toHaveLength(4);
  expect(statCards[0]).toHaveClass('number');
  expect(statCards[0]).toContainHTML(<div></div>);

})

