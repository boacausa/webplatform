module ErrorsHelper
  def form_error_tag(model)
    return unless model.errors.any?

    content_tag(
      :div,
      I18n.t(:form_error),
      class: 'alert alert-danger',
      style: 'margin: 10px'
    )
  end

  def field_error_tag(model, attribute)
    return if model_error_attributes(model).exclude?(attribute)

    content_tag(
      :span,
      model.errors[attribute].first,
      class: 'control-label'
    )
  end

  def form_group_error_class(model, attribute)
    return if model_error_attributes(model).exclude?(attribute)

    'has-error'
  end

  def model_error_attributes(model)
    model.errors.map(&:attribute)
  end
end
