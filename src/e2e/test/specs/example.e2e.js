describe('React App - Home Screen', () => {
    it('should have data of customer', async () => {

        const SELECTED_CUSTOMER_TITLE = '[data-testid="SELECTED_CUSTOMER_TITLE"]';
        const title = await $(SELECTED_CUSTOMER_TITLE);
        await expect(title).toHaveText('Jo hn Smith');
    });
});


