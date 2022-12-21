import { newSpecPage } from '@stencil/core/testing';
import { D09ServiceStatusComponent } from '../d09-service-status-component';

describe('d09-service-status-component', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [D09ServiceStatusComponent],
      html: `<d09-service-status-component></d09-service-status-component>`,
    });
    expect(page.root).toEqualHtml(`
      <d09-service-status-component>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </d09-service-status-component>
    `);
  });
});
