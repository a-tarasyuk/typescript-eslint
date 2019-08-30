import rule from '../../src/rules/camelcase';
import { RuleTester } from '../RuleTester';

const ruleTester = new RuleTester({
  parser: '@typescript-eslint/parser',
});

ruleTester.run('camelcase', rule, {
  valid: [
    {
      code: 'interface Foo { b_ar: number }',
      options: [{ properties: 'never' }],
    },
    {
      code: 'interface Foo { bar: number }',
      options: [{ properties: 'always' }],
    },
    {
      code: 'class Foo { b_ar: number; }',
      options: [{ properties: 'never' }],
    },
    {
      code: 'class Foo { bar: number; }',
      options: [{ properties: 'always' }],
    },
    {
      code: 'class Foo { b_ar: number = 0; }',
      options: [{ properties: 'never' }],
    },
    {
      code: 'class Foo { bar: number = 0; }',
      options: [{ properties: 'always' }],
    },
    {
      code: 'class Foo { constructor(private b_ar: number) {} }',
      options: [{ properties: 'never' }],
    },
    {
      code: 'class Foo { constructor(private bar: number) {} }',
      options: [{ properties: 'always' }],
    },
    {
      code: 'class Foo { constructor(private b_ar: number = 0) {} }',
      options: [{ properties: 'never' }],
    },
    {
      code: 'class Foo { constructor(private bar: number = 0) {} }',
      options: [{ properties: 'always' }],
    },
    {
      code: 'abstract class Foo { b_ar: number; }',
      options: [{ properties: 'never' }],
    },
    {
      code: 'abstract class Foo { bar: number; }',
      options: [{ properties: 'always' }],
    },
    {
      code: 'abstract class Foo { b_ar: number = 0; }',
      options: [{ properties: 'never' }],
    },
    {
      code: 'abstract class Foo { bar: number = 0; }',
      options: [{ properties: 'always' }],
    },
    {
      code: 'abstract class Foo { abstract b_ar: number; }',
      options: [{ properties: 'never' }],
    },
    {
      code: 'abstract class Foo { abstract bar: number; }',
      options: [{ properties: 'always' }],
    },
    {
      code: 'abstract class Foo { abstract b_ar: number = 0; }',
      options: [{ properties: 'never' }],
    },
    {
      code: 'abstract class Foo { abstract bar: number = 0; }',
      options: [{ properties: 'always' }],
    },
    {
      code: 'interface Foo<t_foo> {}',
      options: [{ genericType: 'never' }],
    },
    {
      code: 'interface Foo<T> {}',
      options: [{ genericType: 'always' }],
    },
    {
      code: 'interface Foo<t> {}',
      options: [{ genericType: 'always' }],
    },
    {
      code: 'function fn<t_foo>() {}',
      options: [{ genericType: 'never' }],
    },
    {
      code: 'function fn<T>() {}',
      options: [{ genericType: 'always' }],
    },
    {
      code: 'function fn<t>() {}',
      options: [{ genericType: 'always' }],
    },
    {
      code: 'class Foo<t_foo> {}',
      options: [{ genericType: 'never' }],
    },
    {
      code: 'class Foo<T> {}',
      options: [{ genericType: 'always' }],
    },
    {
      code: 'class Foo<t> {}',
      options: [{ genericType: 'always' }],
    },
    {
      code: `
class Foo {
  method<t_foo>() {}
}
      `,
      options: [{ genericType: 'never' }],
    },
    {
      code: `
class Foo {
  method<T>() {}
}
      `,
      options: [{ genericType: 'always' }],
    },
    {
      code: `
class Foo {
  method<t>() {}
}
      `,
      options: [{ genericType: 'always' }],
    },
    {
      code: `
type Foo<T> = {}
      `,
      options: [{ genericType: 'always' }],
    },
    {
      code: `
type Foo<t> = {}
      `,
      options: [{ genericType: 'always' }],
    },
    {
      code: `
type Foo<t_object> = {}
      `,
      options: [{ genericType: 'never' }],
    },
    {
      code: `
class Foo {
  FOO_method() {}
}
      `,
      options: [{ allow: ['^FOO'] }],
    },
    {
      code: `
class Foo {
  method() {}
}
      `,
      options: [{}],
    },
  ],

  invalid: [
    {
      code: 'interface Foo { b_ar: number }',
      options: [{ properties: 'always' }],
      errors: [
        {
          messageId: 'notCamelCase',
          data: {
            name: 'b_ar',
          },
          line: 1,
          column: 17,
        },
      ],
    },
    {
      code: 'class Foo { b_ar: number; }',
      options: [{ properties: 'always' }],
      errors: [
        {
          messageId: 'notCamelCase',
          data: {
            name: 'b_ar',
          },
          line: 1,
          column: 13,
        },
      ],
    },
    {
      code: 'class Foo { constructor(private b_ar: number) {} }',
      options: [{ properties: 'always' }],
      errors: [
        {
          messageId: 'notCamelCase',
          data: {
            name: 'b_ar',
          },
          line: 1,
          column: 33,
        },
      ],
    },
    {
      code: 'class Foo { constructor(private b_ar: number = 0) {} }',
      options: [{ properties: 'always' }],
      errors: [
        {
          messageId: 'notCamelCase',
          data: {
            name: 'b_ar',
          },
          line: 1,
          column: 33,
        },
      ],
    },
    {
      code: 'abstract class Foo { b_ar: number; }',
      options: [{ properties: 'always' }],
      errors: [
        {
          messageId: 'notCamelCase',
          data: {
            name: 'b_ar',
          },
          line: 1,
          column: 22,
        },
      ],
    },
    {
      code: 'abstract class Foo { b_ar: number = 0; }',
      options: [{ properties: 'always' }],
      errors: [
        {
          messageId: 'notCamelCase',
          data: {
            name: 'b_ar',
          },
          line: 1,
          column: 22,
        },
      ],
    },
    {
      code: 'abstract class Foo { abstract b_ar: number; }',
      options: [{ properties: 'always' }],
      errors: [
        {
          messageId: 'notCamelCase',
          data: {
            name: 'b_ar',
          },
          line: 1,
          column: 31,
        },
      ],
    },
    {
      code: 'abstract class Foo { abstract b_ar: number = 0; }',
      options: [{ properties: 'always' }],
      errors: [
        {
          messageId: 'notCamelCase',
          data: {
            name: 'b_ar',
          },
          line: 1,
          column: 31,
        },
      ],
    },
    {
      code: 'interface Foo<t_foo> {}',
      options: [{ genericType: 'always' }],
      errors: [
        {
          messageId: 'notCamelCase',
          data: {
            name: 't_foo',
          },
          line: 1,
          column: 15,
        },
      ],
    },
    {
      code: 'function fn<t_foo>() {}',
      options: [{ genericType: 'always' }],
      errors: [
        {
          messageId: 'notCamelCase',
          data: {
            name: 't_foo',
          },
          line: 1,
          column: 13,
        },
      ],
    },
    {
      code: 'class Foo<t_foo> {}',
      options: [{ genericType: 'always' }],
      errors: [
        {
          messageId: 'notCamelCase',
          data: {
            name: 't_foo',
          },
          line: 1,
          column: 11,
        },
      ],
    },
    {
      code: `
class Foo {
  method<t_foo>() {}
}
      `,
      options: [{ genericType: 'always' }],
      errors: [
        {
          messageId: 'notCamelCase',
          data: {
            name: 't_foo',
          },
          line: 3,
          column: 10,
        },
      ],
    },
    {
      code: `
class Foo {
  method<t_foo extends t_bar>() {}
}
      `,
      options: [{ genericType: 'always' }],
      errors: [
        {
          messageId: 'notCamelCase',
          data: {
            name: 't_foo',
          },
          line: 3,
          column: 10,
        },
        {
          messageId: 'notCamelCase',
          data: {
            name: 't_bar',
          },
          line: 3,
          column: 24,
        },
      ],
    },
    {
      code: `
class Foo {
  method<t_foo = t_bar>() {}
}
      `,
      options: [{ genericType: 'always' }],
      errors: [
        {
          messageId: 'notCamelCase',
          data: {
            name: 't_foo',
          },
          line: 3,
          column: 10,
        },
        {
          messageId: 'notCamelCase',
          data: {
            name: 't_bar',
          },
          line: 3,
          column: 18,
        },
      ],
    },
  ],
});
