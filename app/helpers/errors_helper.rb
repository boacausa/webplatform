module ErrorsHelper
  def form_error_tag(model)
    return unless model.errors.any?

    content_tag(
      :div,
      I18n.t(:form_error),
      class: 'alert alert-danger'
    )
  end

  def field_error_tag(model, attribute)
    return if model.errors.keys.exclude?(attribute)

    content_tag(
      :span,
      model.errors[attribute].first,
      class: 'control-label'
    )
  end

  def form_group_error_class(model, attribute)
    return if model.errors.keys.exclude?(attribute)

    'has-error'
  end
end
