import React from 'react';
import { screen, waitFor } from '@testing-library/react';
import Provider from '../context/myProvider';
import renderWithRouter from '../utils/renderWithRouter';
import DoneRecipes from '../pages/DoneRecipes';

describe('Testa a tela de DoneRecipes', () => {
  it('Test 40%', async () => {
    const { history } = renderWithRouter(
      <Provider>
        <DoneRecipes />
      </Provider>,
    );
    history.push('/done-recipes');
    await waitFor(() => expect(screen.getByRole('heading', { name: /done recipes/i })).toBeInTheDocument(), { timeout: 3000 });
  });
});
