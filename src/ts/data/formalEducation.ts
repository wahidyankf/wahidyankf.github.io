interface IFormalEducation {
  major: string;
  type: string;
  institution: string;
  location: string;
  start: string;
  end: string;
  info: string;
}

const formalEducation: IFormalEducation[] = [
  {
    major: 'Electrical Engineering',
    type: 'Bachelor',
    institution: 'Institut Teknologi Bandung',
    location: 'Indonesia',
    start: '08/2005',
    end: '06/2011',
    info:
      'GPA: 3.0/4.0. Bachelor thesis: Design and implementation of SMS One Time Password (SMS-OTP) Based Web Authentication System. Supervisor: Ir. Budi Rahardjo M.Sc., Ph.D.',
  },
];

export {formalEducation, IFormalEducation};
