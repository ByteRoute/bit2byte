# Style Guide

## 1. Document Naming Convention
- **Purpose**: Easy identification, organization, and retrieval.
- **Guidelines**:
  - The naming convention should follow the format:  
    **[PersonId]\_[DocumentCategory]\_[version].pdf**
  - **PersonId**: MongoDB ID of the user to which this document belongs (e.g., `507f191e810c19729de860ea`).
  - **DocumentCategory**: Indicate the type of document being stored (e.g., `Aadhar`, `Pancard`, `Passport`). Must be selected from the list provided at the end.
  - **Versioning**: Use **`vX`** to indicate the version:
    - **vX**: Where `X` represents the version number (e.g., `v1`, `v2`, `v3`).
  - **Example Naming**:
    - `507f191e810c19729de860ea_Aadhar_v1.pdf`
    - `507f191e810c19729de860ea_Passport_v2.pdf`
- **Additional Naming Rules**:
  - Avoid spaces or special characters in filenames; only use underscores (`_`) for separation.
  - `PersonId` is case sensitive. All other elements (e.g., DocumentCategory, version) are **not** case sensitive.
- List of document categories to be used in the **DocumentCategory** field:

  -  Identification Documents:
     - Aadhar
     - Pancard
     - Passport
     - VoterId
     - DrivingLicense
     - RationCard
    
  - Education Documents:
    - 10thGradeMarksheet
    - 12thGradeMarksheet
    - DegreeCertificate
    - DiplomaCertificate
    - SchoolLeavingCertificate
    - CharacterCertificate
    - BonafideCertificate
    - MigrationCertificate
    - TransferCertificate
    - ConsolidatedMarksheet
    - ProvisionalCertificate
    - ScholarshipLetter
    - FeeReceipt
    - AttendanceCertificate
    - PhDThesis
    - ProjectReport
    - InternshipCertificate
    - CourseCompletionCertificate
    - OfferLetter
    - ExperienceLetter
    
  - Financial Documents:
    - BankStatement
    - IncomeTaxReturn
    - Form16
    - SalarySlip
    - PFStatement

  - Residence Proofs:
    - ElectricityBill
    - WaterBill
    - RentAgreement
    - PropertyTaxReceipt
    - GasConnectionBill

  - Legal Documents:
    - BirthCertificate
    - MarriageCertificate
    - CasteCertificate
    - Affidavit
    - DeathCertificate

  -  Health Documents:
     - MedicalReport
     - HealthInsurance
     - VaccinationCertificate
     - DisabilityCertificate

  -  Miscellaneous Documents:
     - PoliceClearanceCertificate
     - NoObjectionCertificate
     - EmploymentContract
     - PensionCertificate
     - TravelItinerary
     - OfferLetter
     - ExperienceLetter
     - RelievingLetter

## 2. Backup
- To ensure data integrity and availability, all **critical data** must be backed up at a different location.
- Backup location should also be secure.