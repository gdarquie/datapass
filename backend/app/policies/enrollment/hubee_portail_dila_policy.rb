class Enrollment::HubeePortailDilaPolicy < EnrollmentPolicy
  def permitted_attributes
    res = []

    res.concat([
      :target_api,
      :organization_id,
      :intitule,
      :cgu_approved,
      :dpo_is_informed,
      scopes: [
        :AEC,
        :DDPACS,
        :RCO,
        :DHTOUR,
        :JCC
      ],
      team_members_attributes: [:id, :type, :family_name, :given_name, :email, :phone_number, :job]
    ])

    res
  end
end
