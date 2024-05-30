export interface School {
    id: string;
    name: string;
    type: string;
    products: string[];
    county: string;
    registrationDate: string;
    contactInformation: {
      phone: string;
      email: string;
    };
    schoolBalance: {
      totalInvoices: number;
      totalCollections: number;
      balance: number;
    };
  }