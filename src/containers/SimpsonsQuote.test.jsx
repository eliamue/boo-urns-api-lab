import React from 'react';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
import SimpsonsQuote from './SimpsonsQuote';
import { rest } from 'msw';
import { setupServer } from 'msw/node';

const server = setupServer(
  rest.get(
    'https://thesimpsonsquoteapi.glitch.me/quotes',
    (req, res, ctx) => {
      return res(
        ctx.json([
          {
            quote: 'Ah, be creative. Instead of making sandwhiches with bread, use Pop-Tarts. Instead of chewing gum, chew bacon.',
            character: 'Dr. Nick',
            image: 'https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FNickRiviera.png?1497567511084',
            characterDirection: 'Right',
          },
        ])
      );
    }
  )
);

describe('SimpsonsQuote Container', () => {
  beforeAll(() => server.listen());
  afterAll(() => server.close());

  it('displays a button that fetches a random quote', async () => {
    render(<SimpsonsQuote />);

    const fetchButton = screen.getByRole('button', { name: 'Fetch!' });
    fireEvent.click(fetchButton);
    // userEvent.click(fetchButton)

    return waitFor(() => {
      screen.getByText('chew bacon', { exact: false });
    });
  });
});
