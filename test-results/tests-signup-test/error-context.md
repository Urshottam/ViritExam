# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: tests\signup.spec.js >> test
- Location: tests\signup.spec.js:3:5

# Error details

```
Error: locator.click: Error: strict mode violation: getByRole('textbox') resolved to 6 elements:
    1) <input name="firstName" value="Urshottam" id="_r_0_-form-item" aria-invalid="false" placeholder="Enter Your First Name" aria-describedby="_r_0_-form-item-description" class="flex h-[44px] w-full rounded-lg border border-input bg-transparent px-3 mt-2 text-base transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground placeholder:text-[14px] placeholder:font-satoshi-regular focus-visible:outline-none focus-visible:ring-1 fo…/> aka getByRole('textbox', { name: 'First Name' })
    2) <input name="lastName" value="Maharjan" id="_r_1_-form-item" aria-invalid="false" placeholder="Enter Your Last Name" aria-describedby="_r_1_-form-item-description" class="flex h-[44px] w-full rounded-lg border border-input bg-transparent px-3 mt-2 text-base transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground placeholder:text-[14px] placeholder:font-satoshi-regular focus-visible:outline-none focus-visible:ring-1 focus…/> aka getByRole('textbox', { name: 'Last Name' })
    3) <input type="email" name="email" id="_r_2_-form-item" aria-invalid="false" value="urshottammaharjan98@gmail.com" placeholder="Enter Your Email Address" aria-describedby="_r_2_-form-item-description" class="flex h-[44px] w-full rounded-lg border border-input bg-transparent px-3 mt-2 text-base transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground placeholder:text-[14px] placeholder:font-satoshi-regular focus-visible:outl…/> aka getByRole('textbox', { name: 'Email Address' })
    4) <input value="9769372590" name="phoneNumber" aria-invalid="true" id="_r_4_-form-item" placeholder="00-00000000" aria-describedby="_r_4_-form-item-description _r_4_-form-item-message" class="flex h-[44px] w-full rounded-lg border bg-transparent px-3 mt-2 text-base transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground placeholder:text-[14px] placeholder:font-satoshi-regular focus-visible:outline-none focus-visible:ring-1…/> aka getByRole('textbox', { name: 'Phone Number' })
    5) <input type="password" name="password" value="Urshottam@123" placeholder="******************" class="flex h-[44px] w-full rounded-lg border border-input bg-transparent mt-2 text-base transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground placeholder:text-[14px] placeholder:font-satoshi-regular focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-…/> aka locator('input[name="password"]')
    6) <input type="password" value="Urshottam@123" name="confirmPassword" placeholder="******************" class="flex h-[44px] w-full rounded-lg border border-input bg-transparent mt-2 text-base transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground placeholder:text-[14px] placeholder:font-satoshi-regular focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 m…/> aka locator('input[name="confirmPassword"]')

Call log:
  - waiting for getByRole('textbox')

```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - region "Notifications (F8)":
    - list
  - alert [ref=e2]: Authorized Partner
  - generic [ref=e3]:
    - link "logo" [ref=e5] [cursor=pointer]:
      - /url: /
      - img "logo" [ref=e6]
    - generic [ref=e8]:
      - generic [ref=e9] [cursor=pointer]:
        - img [ref=e10]
        - text: Go to Login
      - generic [ref=e12]:
        - heading "Complete Your Agent Profile in Steps" [level=2] [ref=e13]
        - generic [ref=e14]:
          - generic [ref=e15]:
            - generic [ref=e16]: 1. Set up your Account
            - generic [ref=e17]: 2. Agency Details
            - generic [ref=e18]: 3. Professional Experience
            - generic [ref=e19]: 4. Verification and Preferences
          - generic [ref=e20]:
            - heading "Provide your personal details." [level=3] [ref=e21]
            - generic [ref=e22]:
              - generic [ref=e23]:
                - generic [ref=e24]:
                  - text: First Name
                  - textbox "First Name" [ref=e25]:
                    - /placeholder: Enter Your First Name
                    - text: Urshottam
                - generic [ref=e26]:
                  - text: Last Name
                  - textbox "Last Name" [ref=e27]:
                    - /placeholder: Enter Your Last Name
                    - text: Maharjan
              - generic [ref=e28]:
                - generic [ref=e29]:
                  - text: Email Address
                  - textbox "Email Address" [ref=e30]:
                    - /placeholder: Enter Your Email Address
                    - text: urshottammaharjan98@gmail.com
                - generic [ref=e32]:
                  - text: Phone Number
                  - generic [ref=e33]:
                    - textbox "Phone Number" [invalid] [ref=e34]:
                      - /placeholder: 00-00000000
                      - text: "9769372590"
                    - generic [ref=e35]:
                      - combobox [ref=e36] [cursor=pointer]:
                        - generic: 🇳🇵
                        - img [ref=e37]
                      - combobox [ref=e39]
                      - generic [ref=e40]: "+977"
                    - img [ref=e42]
                  - paragraph [ref=e44]: Validating...
              - generic [ref=e45]:
                - generic [ref=e46]:
                  - text: Password
                  - generic [ref=e47]:
                    - textbox "******************" [ref=e48]: Urshottam@123
                    - img [ref=e49]
                    - button "Show password" [ref=e51] [cursor=pointer]:
                      - img
                      - generic [ref=e52]: Show password
                - generic [ref=e60]:
                  - text: Confirm Password
                  - generic [ref=e61]:
                    - textbox "******************" [ref=e62]: Urshottam@123
                    - img [ref=e63]
                    - button "Show password" [ref=e65] [cursor=pointer]:
                      - img
                      - generic [ref=e66]: Show password
              - generic [ref=e74]:
                - button "Next" [disabled]:
                  - img
                  - text: Next
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | 
  3  | test('test', async ({ page }) => {
  4  |   await page.goto('https://authorized-partner.vercel.app/');
  5  |   await page.getByRole('link', { name: 'Login' }).click();
  6  |   await page.getByRole('link', { name: 'Sign Up' }).click();
  7  |   await page.getByRole('checkbox', { name: 'I agree to the Terms of' }).click();
  8  |   await page.getByText('Welcome to Authorized PartnerRegister Your AgencyBefore you get started, please').click();
  9  |   await page.getByRole('button', { name: 'Continue' }).click();
  10 |   await page.getByRole('textbox', { name: 'First Name' }).click();
  11 |   await page.getByRole('textbox', { name: 'First Name' }).fill('Urshottam');
  12 |   await page.getByRole('textbox', { name: 'Last Name' }).click();
  13 |   await page.getByRole('textbox', { name: 'Last Name' }).fill('Maharjan');
  14 |   await page.getByRole('textbox', { name: 'Email Address' }).click();
  15 |   await page.getByRole('textbox', { name: 'Email Address' }).fill('urshottammaharjan98@gmail.com');
  16 |   await page.getByRole('textbox', { name: 'Phone Number' }).click();
  17 |   await page.getByRole('textbox', { name: 'Phone Number' }).fill('9769372590');
  18 |   await page.locator('input[name="password"]').click();
  19 |   await page.locator('input[name="password"]').fill('Urshottam@123');
  20 |   await page.locator('input[name="confirmPassword"]').click();
  21 |   await page.locator('input[name="confirmPassword"]').fill('Urshottam@123');
  22 |   await page.getByRole('button', { name: 'Next' }).click();
> 23 |   await page.getByRole('textbox').click();
     |                                   ^ Error: locator.click: Error: strict mode violation: getByRole('textbox') resolved to 6 elements:
  24 |   await page.getByRole('textbox').fill('176630');
  25 |   await page.getByRole('button', { name: 'Verify Code' }).click();
  26 |   await page.getByRole('textbox', { name: 'Name' }).click();
  27 |   await page.getByRole('textbox', { name: 'Name' }).fill('GREATPLAY');
  28 |   await page.getByRole('textbox', { name: 'Role in Agency' }).click();
  29 |   await page.getByRole('textbox', { name: 'Role in Agency' }).fill('CTO');
  30 |   await page.getByRole('textbox', { name: 'Email Address' }).click();
  31 |   await page.getByRole('textbox', { name: 'Email Address' }).fill('greatplay12@gmail.com');
  32 |   await page.getByRole('textbox', { name: 'Website' }).click();
  33 |   await page.getByRole('textbox', { name: 'Website' }).fill('www.greatplay.com');
  34 |   await page.getByRole('textbox', { name: 'Address', exact: true }).click();
  35 |   await page.getByRole('textbox', { name: 'Address', exact: true }).fill('Kathmnadu');
  36 |   await page.getByRole('combobox').click();
  37 |   await page.locator('div').filter({ hasText: /^Nepal$/ }).click();
  38 |   await page.getByRole('button', { name: 'Next' }).click();
  39 |   await page.getByRole('combobox', { name: 'Years of Experience' }).click();
  40 |   await page.getByRole('option', { name: '5 years' }).click();
  41 |   await page.getByRole('spinbutton', { name: 'Number of Students Recruited' }).click();
  42 |   await page.getByRole('spinbutton', { name: 'Number of Students Recruited' }).fill('1000');
  43 |   await page.getByRole('textbox', { name: 'Focus Area' }).click();
  44 |   await page.getByRole('textbox', { name: 'Focus Area' }).fill('Playertoplay for olmpyics');
  45 |   await page.getByRole('spinbutton', { name: 'Success Metrics' }).click();
  46 |   await page.getByRole('spinbutton', { name: 'Success Metrics' }).fill('25');
  47 |   await page.getByRole('checkbox', { name: 'Test Prepration' }).click();
  48 |   await page.getByRole('button', { name: 'Next' }).click();
  49 |   await page.getByRole('textbox', { name: 'Business Registration Number' }).click();
  50 |   await page.getByRole('textbox', { name: 'Business Registration Number' }).fill('7654');
  51 |   await page.getByRole('combobox', { name: 'Preferred Countries' }).click();
  52 |   await page.locator('div').filter({ hasText: /^Nepal$/ }).click();
  53 |   await page.getByRole('checkbox', { name: 'Colleges' }).click();
  54 |   await page.getByRole('textbox', { name: 'Certification Details (' }).click();
  55 |   await page.getByRole('textbox', { name: 'Certification Details (' }).fill('NOC');
  56 |   await page.getByRole('button', { name: 'Submit' }).click();
  57 |   await page.getByText('Upload a file or drag and dropPNG, JPG, PDF, DOCS, XLSX, CSV, PPT up to 5MB').first().click();
  58 |   await page.getByRole('button', { name: 'Choose File' }).first().setInputFiles('WhatsApp Image 2026-06-23 at 07.46.07.jpeg');
  59 |   await page.getByText('Upload a file or drag and dropPNG, JPG, PDF, DOCS, XLSX, CSV, PPT up to 5MB').click();
  60 |   await page.getByRole('button', { name: 'Choose File' }).nth(1).setInputFiles('WhatsApp Image 2026-06-23 at 08.35.07.jpeg');
  61 |   await page.getByRole('button', { name: 'Submit' }).click();
  62 |   await page.goto('https://authorized-partner.vercel.app/admin/profile');
  63 | });
```