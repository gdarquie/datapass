import React from 'react';
import Form from '../components/templates/Form';
import OrganisationSection from '../components/organisms/form-sections/OrganisationSection';
import DescriptionSection from '../components/organisms/form-sections/DescriptionSection';
import DonneesSection from '../components/organisms/form-sections/DonneesSection';
import CadreJuridiqueSection from '../components/organisms/form-sections/CadreJuridiqueSection';
import CguSection from '../components/organisms/form-sections/CguSection';
import ÉquipeSection from '../components/organisms/form-sections/ÉquipeSection';
import { DATA_PROVIDER_PARAMETERS } from '../config/data-provider-parameters';
import AgentConnectNetworkSection from '../components/organisms/form-sections/AgentConnectNetworkSection';

const target_api = 'agent_connect_fs';

export const availableScopes = [
  {
    value: 'OpenID',
    label: 'OpenID',
    required: true,
  },
  {
    value: 'usual_name',
    label: 'Nom de l‘agent',
    required: false,
  },
  {
    value: 'given_name',
    label: 'Prénom',
    required: false,
  },
  {
    value: 'email',
    label: 'Adresse électronique professionnelle de l’agent',
    required: false,
  },
  {
    value: 'uid',
    label: 'Identifiant technique',
    required: false,
    helper: '« sub » de l’utilisateur au format OpenIDConnect',
  },
  {
    value: 'phone',
    label: 'Numéro de téléphone professionnel de l’agent',
    required: false,
  },
  {
    value: 'Siren',
    label: 'Numéro SIREN de l’organisation de rattachement',
    required: false,
  },
  {
    value: 'Siret',
    label: 'Numéro SIRET de l’organisation de rattachement',
    required: false,
  },
  {
    value: 'Organizational_unit',
    label: 'Unité d’affectation de l’agent',
    required: false,
  },
  {
    value: 'Belonging_population',
    label: 'Population d’appartenance de l’agent',
    required: false,
    helper: 'Agent fonctionnaire, agent contractuel, prestataire, stagiaire, …',
  },
  {
    value: 'chorus_uid',
    label: 'Identifiant unique créé par l’application ChorusDT',
    required: false,
  },
];

const AgentConnectFs = () => (
  <Form
    target_api={target_api}
    contactEmail={DATA_PROVIDER_PARAMETERS[target_api]?.email}
    documentationUrl="https://api.gouv.fr/api-agent-connect"
  >
    <OrganisationSection />
    <DescriptionSection />
    <DonneesSection availableScopes={availableScopes} />
    <AgentConnectNetworkSection />
    <CadreJuridiqueSection
      defaultFondementJuridiqueTitle="La décision du 18 juin 2021"
      defaultFondementJuridiqueUrl="https://www.gouvernement.fr/sites/default/files/contenu/piece-jointe/2021/06/20210618_decision_dinum.pdf"
    />
    <ÉquipeSection responsableTechniqueNeedsMobilePhone={true} />
    <CguSection cguLink="/docs/cgu_agentconnect_fs.pdf" />
  </Form>
);

export default AgentConnectFs;
