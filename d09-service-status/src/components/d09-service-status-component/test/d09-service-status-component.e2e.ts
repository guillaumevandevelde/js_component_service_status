import { newE2EPage } from '@stencil/core/testing';

describe('d09-service-status-component', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<d09-service-status-component></d09-service-status-component>');

    const element = await page.find('d09-service-status-component');
    expect(element).toHaveClass('hydrated');
  });
});
