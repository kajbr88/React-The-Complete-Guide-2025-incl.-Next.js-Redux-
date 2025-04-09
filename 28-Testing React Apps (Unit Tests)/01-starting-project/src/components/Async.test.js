import { render, screen } from '@testing-library/react';
import Async from './Async';

describe('Async component', () => {
    test('renders posts if request suceeds', async () => {

        window.fetch = jest.fn();
        window.fetch.mockResolvedValueOnce({
            json: async () => [{ id: 'p1', title: 'First post' }],
        });
        // Arrange-Set up the test data, test conditions and test environment.
        render(<Async />);

        // Act-Run logic that should be tested(e.g., execute function(your code))
        // ... nothing

        // Assert-Compare execution results with expected results.
        const listItemElements = await screen.findAllByRole('listitem');
        { /* get-throws error if element is not found, query-dosent throw error, 
         find-will return a promise if an element is there eventually. */ }
        expect(listItemElements).not.toHaveLength(0);

    });
});

