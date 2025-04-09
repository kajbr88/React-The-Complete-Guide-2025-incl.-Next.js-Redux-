import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Greeting from './Greeting';

describe('Greeting component', () => {
    test('renders "Hello World" as a text', () => {

        // Arrange-Set up the test data, test conditions and test environment.
        render(<Greeting />);

        // Act-Run logic that should be tested(e.g., execute function(your code))
        // ... nothing

        // Assert-Compare execution results with expected results.
        const helloWorldElement = screen.getByText('Hello World!');
        { /* get-throws error if element is not found, query-dosent throw error, 
         find-will return a promise if an element is there eventually. */ }
        expect(helloWorldElement).toBeInTheDocument();

    });

    test('renders "good to see you" if the button was NOT clicked', () => {
        render(<Greeting />);

        const outputElement = screen.getByText('good to see you', { exact: false });
        // get-throws error if element is not found, query-dosent throw error, find-will return a promise if an element is there eventually.
        expect(outputElement).toBeInTheDocument();
    });

    test('renders "Changed!" if the button was clicked', () => {
        // Arrange
        render(<Greeting />);

        // Act
        const buttonElement = screen.getByRole('button');
        userEvent.click(buttonElement)

        // Assert
        const outputElement = screen.getByText('Changed!');
        expect(outputElement).toBeInTheDocument();
    });

    test('does not render "good to see you" if the button was clicked', () => {
        // Arrange
        render(<Greeting />);

        // Act
        const buttonElement = screen.getByRole('button');
        userEvent.click(buttonElement)

        // Assert
        const outputElement = screen.queryByText('good to see you!', { exact: false });
        expect(outputElement).toBeNull();
    });
});

