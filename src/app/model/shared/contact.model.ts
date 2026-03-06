export class Contact {
  id: string;
  name: string;
  email: string;
  subject: string;
  body: string;

  constructor(id?: string,
              name?: string,
              email?: string,
              subject?: string,
              body?: string)  {
    this.id = id || '';
    this.name = name || '';
    this.email = email || '';
    this.subject = subject || '';
    this.body = body || '';
  }
}
