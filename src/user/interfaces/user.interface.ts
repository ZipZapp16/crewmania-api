export interface User {
        id: string;
        name: string;
        lastname: string;
        secondLastname: string;
        email: string;
        password: string;
        dateAdmission: Date;
        phone?: string;
        profilePicture: string;
        loginOption: string;
        firebaseToken: string;
        headquarterId: string;
        hierarchyId: string;
        membershipId: string;
        positionId: string;
        statusVerificationId: string;
        validationFormId: string;
}